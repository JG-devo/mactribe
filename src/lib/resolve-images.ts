import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Utility that normalizes local (Astro-optimized) and remote images into a single payload shape.

export type LocalImageSource = { type: 'local'; src: ImageMetadata };
export type RemoteImageSource = { type: 'remote'; src: string };

export type ImageSource = LocalImageSource | RemoteImageSource;

export type OptimizedImagePayload = {
	kind: 'optimized';
	image: {
		src: string;
		srcSet?: string;
		sizes?: string;
		width?: number | string;
		height?: number | string;
		loading?: 'lazy' | 'eager';
		decoding?: 'async' | 'sync' | 'auto';
	};
};

export type ExternalImagePayload = {
	kind: 'external';
	src: string;
};

export type ResolvedImage = OptimizedImagePayload | ExternalImagePayload;

// Optional overrides for callers that need bespoke responsive breakpoints.
export type ResolveImagesOptions = {
	widths?: number[];
	formats?: Array<'avif' | 'webp' | 'jpeg' | 'png' | 'jpg'>;
	quality?: number;
	sizes?: string;
};

const defaultOptions: Required<Omit<ResolveImagesOptions, 'sizes'>> = {
	widths: [480, 768, 1024, 1280],
	formats: ['avif', 'webp', 'jpeg'],
	quality: 80
};

export async function resolveImage(source: ImageSource, options?: ResolveImagesOptions): Promise<ResolvedImage> {
	if (source.type === 'remote') {
		// Remote assets cannot be processed by Astro, so just echo their URL back.
		return {
			kind: 'external',
			src: source.src
		};
	}

	const merged = { ...defaultOptions, ...options };
	// Astro performs the heavy lifting during build and returns optimized URLs + metadata.
	const optimized = await getImage({
		src: source.src,
		widths: merged.widths,
		formats: merged.formats,
		quality: merged.quality,
		sizes: merged.sizes
	});

	const srcSet =
		optimized.srcSet?.values
			?.map(value => (value.descriptor ? `${value.url} ${value.descriptor}` : value.url))
			.join(', ') ?? undefined;

	return {
		kind: 'optimized',
		image: {
			src: optimized.src,
			srcSet,
			sizes: optimized.attributes?.sizes,
			width: optimized.attributes?.width,
			height: optimized.attributes?.height,
			loading: optimized.attributes?.loading,
			decoding: optimized.attributes?.decoding
		}
	};
}

export async function resolveImages(
	sources: ImageSource[],
	options?: ResolveImagesOptions
): Promise<ResolvedImage[]> {
	return Promise.all(sources.map(source => resolveImage(source, options)));
}
