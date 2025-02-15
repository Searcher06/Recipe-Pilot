import { useState } from "react";
import r2 from "../people/person 1.jpg";
import r3 from "../people/person 3.jpg";
import r4 from "../people/person 2.jpg";
import r5 from "../people/person 5.jpg";
import "../components/Review.css"

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
    id: 4,
    name: "Andrew Martins",
    role: "Student",
    image: r2,
    quote:
      "As a student living alone, I struggle to find time to cook, but this app has been my go-to solution. The quick meal ideas are perfect for my schedule, and I appreciate the affordability of the ingredients used. It’s practical and efficient!",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="review-container">
      <div className="review-wrapper">
        <button onClick={prevSlide} className="review-button left">
          ←
        </button>
        <div className="review-card">
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="review-image"
          />
          <blockquote className="review-quote">
            "{testimonials[currentSlide].quote}"
          </blockquote>
          <div className="review-author">
            <h3>{testimonials[currentSlide].name}</h3>
            <p>{testimonials[currentSlide].role}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="review-button right">
          →
        </button>
        <div className="review-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`review-dot ${currentSlide === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
