"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("User");
  const products = [
    { title: "Product 1", description: "High-quality product 1", price: "$25" },
    { title: "Product 2", description: "High-quality product 2", price: "$40" },
    { title: "Product 3", description: "High-quality product 3", price: "$15" },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p className="text-xl font-semibold">{product.price}</p>
              <Button className="mt-4 w-full bg-primary text-white">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 p-6 bg-secondary rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-4">
          Get the latest updates on new products and upcoming sales.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-md w-full"
          />
          <Button className="bg-primary text-white">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
