import React from "react";
import client from "../../sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function HomePage() {
  // Fetch the events data
  const events = await client.fetch(EVENTS_QUERY);

  return (
    <div className="h-full w-full">
      <h1>Home</h1>
      <ul>
        {events.map(
          (event: {
            _id: string;
            title: string;
            description: string;
            slug?: { current: string };
            image?: { asset: { url: string } };
          }) => (
            <li key={event._id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Slug: {event.slug?.current}</p>
              {event.image && (
                <Image
                  src={event.image.asset.url} // Use correct image URL
                  alt={event.title}
                  width={300} // Required for next/image
                  height={200} // Required for next/image
                  style={{ objectFit: "cover" }}
                />
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
