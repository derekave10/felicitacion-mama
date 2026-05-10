import Image from "next/image";
import MusicPlayer from "@/components/MusicPlayer";

const galleryPhotos = [
  { src: "/images/foto01.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto03.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto04.jpg", alt: "Momento juntos" },
  { src: "/images/foto05.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto07.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto08.jpg", alt: "Momento juntos" },
  { src: "/images/foto09.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto10.jpg", alt: "Momento juntos" },
  { src: "/images/foto11.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto12.jpg", alt: "Momento juntos" },
  { src: "/images/foto13.jpg", alt: "Recuerdo especial" },
  { src: "/images/foto14.jpg", alt: "Momento juntos" },
];

export default function Page() {
  return (
    <main>
      <MusicPlayer />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ minHeight: "100svh" }}>
        <Image
          src="/images/portada.jpg"
          alt="Portada Día de las Madres"
          fill
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 40%, rgba(159,18,57,0.6) 100%)",
          }}
        />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center text-white">
          <p
            className="font-nunito text-sm uppercase tracking-widest mb-3 text-white/80 animate-fade-in-up"
            style={{ letterSpacing: "0.2em" }}
          >
            ✿ Feliz Día de las Madres ✿
          </p>
          <h1
            className="font-dancing animate-fade-in-up-delay-1"
            style={{
              fontSize: "clamp(3.5rem, 16vw, 7rem)",
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Mamá
          </h1>
          <p
            className="font-nunito mt-4 text-white/90 animate-fade-in-up-delay-2"
            style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            La persona más importante de mi vida
          </p>
          {/* Scroll indicator */}
          <a
            href="#mensaje"
            className="mt-10 animate-bounce text-white/70 text-3xl animate-fade-in-up-delay-3"
            aria-label="Ver el mensaje"
          >
            ↓
          </a>
        </div>
      </section>

      {/* ── MENSAJE ──────────────────────────────────────────── */}
      <section
        id="mensaje"
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, #fff1f2 0%, #ffe4e6 50%, #fff1f2 100%)",
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          {/* Decorative heart */}
          <div className="text-6xl mb-8 animate-float-heart inline-block">
            💕
          </div>

          <h2
            className="font-dancing text-rose-700 mb-10"
            style={{ fontSize: "clamp(2.2rem, 8vw, 3.5rem)" }}
          >
            Te quiero, Mamá
          </h2>

          <div
            className="font-nunito text-rose-900 space-y-5 text-left"
            style={{ fontSize: "clamp(1rem, 4.5vw, 1.15rem)", lineHeight: 1.8 }}
          >
            <p>
              Mamá, no existen palabras que alcancen para decirte todo
              lo que significas para mí.
            </p>

            <p>
              Gracias por cada mañana que me despertaste con tu amor, por cada
              noche que me cuidaste cuando más lo necesitaba, y por cada
              consejo que llegó justo en el momento correcto.
            </p>

            <p>
              Todo lo que soy, cada logro, cada sonrisa, cada fuerza que
              encuentro cuando la vida se pone difícil, todo viene de ti.
              Eres mi raíz y mi refugio.
            </p>

            <p>
              Hoy quiero que sepas que no hay un solo día en que no piense en
              ti con gratitud. Que te quiero más de lo que cualquier canción
              o carta podría expresar.
            </p>

            <p className="text-center font-dancing text-rose-600 text-2xl pt-4">
              Feliz Día de las Madres. 🌹
              <br />
              Con todo mi amor, Derek
            </p>
          </div>
        </div>
      </section>

      {/* ── GALERÍA ──────────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "white" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-dancing text-rose-700 text-center mb-3"
            style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}
          >
            Nuestros Recuerdos
          </h2>
          <p className="font-nunito text-rose-400 text-center text-sm mb-10 uppercase tracking-widest">
            ✿ momentos que atesoro para siempre ✿
          </p>

          <div className="gallery-columns">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={i < 4 ? "eager" : "lazy"}
                  className="w-full rounded-2xl shadow-md"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #9f1239 0%, #be123c 40%, #f43f5e 100%)",
        }}
      >
        <div className="text-7xl mb-6 animate-float-heart inline-block">
          ❤️
        </div>

        <h2
          className="font-dancing text-white mb-4"
          style={{
            fontSize: "clamp(3rem, 12vw, 6rem)",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Te Amo, Mamá
        </h2>

        <p
          className="font-nunito text-white/90 mb-2"
          style={{ fontSize: "clamp(1.1rem, 4vw, 1.4rem)" }}
        >
          Hoy, mañana y siempre.
        </p>

        <p className="font-dancing text-rose-200 text-2xl mt-6">
          🌸 Evelyn 🌸
        </p>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="py-6 text-center font-nunito text-xs text-rose-300"
        style={{ background: "#881337" }}
      >
        Hecho con amor por Derek ❤️
      </footer>
    </main>
  );
}
