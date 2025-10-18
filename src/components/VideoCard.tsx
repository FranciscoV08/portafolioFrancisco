interface VideoCardProps {
  url: string
  title: string
}

const VideoCard = ({ url, title }: VideoCardProps) => {
  return (
    <div className="bg-gray-800 max-w-md my-5 flex flex-col items-center rounded-xl shadow-lg">
      <div className="w-full">
        <iframe
          className="w-full aspect-video rounded-lg"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center my-5 mx-2 text-2xl font-light">{title}</p>
    </div>
  )
}

export default VideoCard
