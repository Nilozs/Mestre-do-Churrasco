import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionHOme() {
  return (
    <Accordion type="single" collapsible className="w-full h-screen mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Como fazer uma boa pizza?</AccordionTrigger>
        <AccordionContent>
          Fazer uma boa pizza envolve uma massa bem preparada, um molho saboroso
          e ingredientes de qualidade. Use farinha especial para pizzas, deixe a
          massa descansar corretamente e escolha recheios que harmonizem bem
          entre si. Asse em forno bem quente para garantir uma textura crocante
          e um sabor irresistível.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Dicas Gerais para Temperar Pizza</AccordionTrigger>
        <AccordionContent>
          Use Ervas Aromáticas: O manjericão fresco é indispensável, mas orégano
          também é um clássico. Experimente alecrim e tomilho para variações.
          Molho de Tomate: Prefira tomates frescos ou um molho caseiro bem
          temperado com alho e cebola. Queijo de Qualidade: Muçarela é o básico,
          mas experimente queijos como parmesão, gorgonzola ou até burrata para
          um toque especial. Azeite: Finalize sua pizza com um fio de azeite para
          realçar os sabores.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Descanso da Massa</AccordionTrigger>
        <AccordionContent>
          Deixe a massa descansar por pelo menos 1 a 2 horas antes de abrir.
          Esse descanso é fundamental para que o glúten se desenvolva,
          garantindo uma massa elástica e leve. Durante o descanso, cubra a
          massa com um pano úmido ou filme plástico para evitar que resseque.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Dicas para sua pizza</AccordionTrigger>
        <AccordionContent>
          <div className="aspect-w-16 aspect-video aspect-h-9 mb-6 overflow-auto">
            <iframe
              className="w-screen-auto h-screen-auto"
              src="https://www.youtube.com/embed/rBUmx1OJBUY?si=impepMyZ3LkA4esn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
