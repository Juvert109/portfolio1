import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Hotel } from "lucide-react";
import { NavLink } from "react-router";

export function CardDataSection() {
  const products = [
    {
      id: 1,
      name: "Hotel Reservation ",
      description: "A simple and convenient website for browsing rooms and making hotel reservations online.",
      icon: <Hotel className="w-5 h-5 text-[#F77F00]" />,
      imageSrc: "project1.png",
      link: "https://hotel-homepage-u8ah.vercel.app/login",
    },
  ];

  return (
    <Section className="py-12 bg-gray-50/50">
      <div className="justify-center flex items-center mb-8 text-center text-[#003049]">
        <h1 className="text-3xl font-bold">Featured Projects</h1>
      </div>
      
      {/* Centered container wrapper */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <Card key={product.id} className="w-full max-w-sm border-gray-200 hover:border-[#FCBF49] transition-colors">
            <CardHeader>
              <CardTitle
                icon={product.icon}
                imageSrc={product.imageSrc}
                imageFullWidth
                className="text-[#003049]"
              >
                {product.name}
              </CardTitle>

              <CardDescription>
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <NavLink
                to={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full justify-between group/btn bg-[#D62828] text-white hover:bg-[#b02020]">
                  Click Me
                  <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Button>
              </NavLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}