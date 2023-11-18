import Image from "next/image";
import React from "react";
import { projectData } from "../../static/project.data";

function Project() {
  return (
    <div>
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8">Portfolio</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.portfolioItems.map((item) => (
              <div class="bg-white p-6 rounded-lg shadow-md" key={item.count}>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-96 w-96 rounded-sm"
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
