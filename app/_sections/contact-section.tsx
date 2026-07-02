import { PlaceholderCard } from "../_components/page-sections";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-(--theme-border) bg-(--theme-background)">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase text-(--theme-label)">
            Contacto
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-(--theme-text-primary)">
            Un lugar claro para iniciar una conversacion.
          </h2>
          <p className="mt-3 text-base leading-7 text-(--theme-text-secondary)">
            Canales, expectativas, disponibilidad y un formulario placeholder
            para convertir esta seccion en contacto real.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard title="Email">
            tuemail@example.com
            <br />
            Placeholder para correo principal.
          </PlaceholderCard>
          <PlaceholderCard title="LinkedIn">
            /in/tu-perfil
            <br />
            Placeholder para perfil profesional.
          </PlaceholderCard>
          <PlaceholderCard title="Agenda">
            Link de calendario
            <br />
            Placeholder para llamadas de descubrimiento.
          </PlaceholderCard>
        </div>

        <form className="theme-card-shadow mt-8 grid max-w-3xl gap-4 rounded-lg border border-(--theme-border) bg-(--theme-surface-muted) p-6">
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            Nombre
            <input
              className="min-h-11 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder="Tu nombre"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            Email
            <input
              className="min-h-11 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder="tu@email.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            Mensaje
            <textarea
              className="min-h-36 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 py-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder="Cuentame que necesitas construir o mejorar."
            />
          </label>
          <button className="button-primary w-fit" type="button">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
