type VideoSource = {
  src: string;
  type: string; // e.g. "video/webm; codecs=vp9,opus" or "video/mp4; codecs=avc1.42E01E,mp4a.40.2"
};

type VideoProps = {
  sources: VideoSource[]; // ordered best -> fallback
  poster: string;
  width?: number;
  height?: number;
  className?: string;
  preload?: "none" | "metadata" | "auto";
};

export function Video({
  sources,
  poster,
  width,
  height,
  className,
  preload = "metadata",
}: VideoProps) {
  return (
    <video
      className={className}
      poster={poster}
      width={width}
      height={height}
      controls={false}
      autoPlay={true}
      muted={true}
      loop={true}
      playsInline={true}
      preload={preload}
    >
      {sources.map((s) => (
        <source key={`${s.type}-${s.src}`} src={s.src} type={s.type} />
      ))}
      {/* Last-resort fallback */}
      Sorry, your browser doesn't support embedded video.
    </video>
  );
}
