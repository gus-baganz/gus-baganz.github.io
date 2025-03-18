import Image from "next/image"
import { Mail, FileText, Music, Camera, Instagram, Facebook } from "lucide-react"
import { LinkItem } from "@/components/link-item"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#333333] text-[#C7C7C7] font-serif flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-6 py-8">
        <h1 className="text-2xl mb-4">gus baganz</h1>

        <div className="relative w-56 h-56 mx-auto group">
          <Image
            src="http://www.geocities.ws/baganz/photo.jpg"
            alt="photograph of me"
            width={226}
            height={220}
            className="transition-opacity duration-300 group-hover:opacity-25"
          />
        </div>

        <div className="my-4">----</div>

        <div className="space-y-2">
          <LinkItem
            href="https://mediagraph.io/gus/explore/collections/selected/?sort=created_at&order=asc"
            text="link to a gallery of some recent photographs"
            icon={<Camera size={16} />}
            className="text-[#ccccff]"
          />

          <LinkItem
            href="https://cargocollective.com/gusbaganz/"
            text="link to some galleries of very old photographs"
            icon={<Camera size={16} />}
          />
        </div>

        <div className="my-4">--</div>

        <div className="space-y-2">
          <LinkItem
            href="https://www.instagram.com/gusbaganz/"
            text="link to my instagram profile"
            icon={<Instagram size={16} />}
          />

          <LinkItem
            href="https://www.facebook.com/gus.baganz/"
            text="link to my facebook profile"
            icon={<Facebook size={16} />}
          />

          <LinkItem
            href="https://open.spotify.com/playlist/0gcUBh0dzmkvDyLOmvZZxM?si=ab746efedb934761"
            text="link to some music I've been listening to lately"
            icon={<Music size={16} />}
          />
        </div>

        <div className="my-4">-</div>

        <div className="space-y-2">
          <LinkItem href="mailto:email@example.com" text="my email" icon={<Mail size={16} />} />

          <LinkItem href="http://www.geocities.ws/baganz/CV0724.pdf" text="CV" icon={<FileText size={16} />} />
        </div>
      </div>
    </main>
  )
}

