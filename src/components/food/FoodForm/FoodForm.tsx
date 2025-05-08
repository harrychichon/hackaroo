"use client";

import { useState } from "react";
import styles from "./FoodForm.module.scss";

const tags = ["Vegansk", "Vegetarian", "Glutenfri", "Laktosfri", "Low carb"];

export default function FoodForm() {
  const [formData, setFormData] = useState({
    image: null as File | null,
    location: "",
    expiry: "",
    ingredients: "",
    description: "",
    tags: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        image: (e.target as HTMLInputElement).files?.[0] || null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Foto
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </label>

      <label>
        Plats
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Bäst före
        <input
          type="date"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
        />
      </label>

      <label>
        Ingredienser
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        />
      </label>

      <label>
        Beskrivning
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <div className={styles.tagSection}>
        {/* <p>Taggar</p> */}
        <div className={styles.tags}>
          {tags.map((tag) => (
            <label key={tag} className={styles.tagCheckbox}>
              <input
                type="checkbox"
                checked={formData.tags.includes(tag)}
                onChange={() => handleTagToggle(tag)}
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <button type="submit">Skicka</button>
    </form>
  );
}
