import { useState } from "react";
import r2 from "../people/person 1.jpg";
import r3 from "../people/person 3.jpg";
import r4 from "../people/person 2.jpg";
import r5 from "../people/person 5.jpg";
const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Home Cook & Food Enthusiast",
    image: r3,
    quote:
      "Recipe Pilot has transformed my cooking journey! The recipe finder is incredibly intuitive, and I love how it suggests alternatives when I'm missing ingredients. It's like having a personal cooking assistant.",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Busy Parent & Weekend Chef",
    image: r4,
    quote:
      "As a busy parent, Recipe Pilot has been a game-changer. I can quickly find recipes based on what's in my fridge, and the step-by-step cooking guidance makes even complex dishes manageable.",
  },
  {
    id: 3,
    name: "Sophie Bennett",
    role: "Beginner Cook",
    image: r5,
    quote:
      "Being new to cooking, I was intimidated at first. Recipe Pilot made it so easy to start! The cooking tips and recipe recommendations are perfect for beginners like me. Now I cook with confidence!",
  },
  {
    id:4,
    name:"Andrew martins",
    role:"Student",
    image:r2,
    quote:
    "As a student living alone, I struggle to find time to cook, but this app has been my go-to solution. The quick meal ideas are perfect for my schedule, and I appreciate the affordability of the ingredients used. It’s practical and efficient!"
  },
];
export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <div
      style={{
        width: "90%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        marginTop:"80px"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          padding: "0 40px",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          ←
        </button>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            transition: "opacity 0.3s ease",
          }}
        >
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <blockquote
            style={{
              margin: 0,
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#333",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            "{testimonials[currentSlide].quote}"
          </blockquote>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: "0 0 4px 0",
                color: "#1a1a1a",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              {testimonials[currentSlide].name}
            </h3>
            <p
              style={{
                margin: 0,
                color: "#666",
                fontSize: "0.9rem",
              }}
            >
              {testimonials[currentSlide].role}
            </p>
          </div>
        </div>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          →
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: currentSlide === index ? "#333" : "#ccc",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
