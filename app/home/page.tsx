import React from "react";
import client from "../../sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/images";

export default async function HomePage() {
  // Fetch the events data
  const events = await client.fetch(EVENTS_QUERY);

  return (
    <div className="h-screen w-screen justify-center items-center flex flex-col">
      <h1>Home</h1>
      <section className="justify-center items-center w-3/4 ">
        <ul className="border rounded-lg flex ">
          {events.map(
            (event: {
              _id: string;
              title: string;
              description: string;
              slug?: { current: string };
              image?: { asset: { _ref: string } };
            }) => (
              <li
                key={event._id}
                className="border rounded-lg border-y-black shadow-lg p-4"
              >
                <h2>{event.title}</h2>
                <div className="flex">
                  {event.image?.asset && (
                    <Image
                      width={200}
                      height={200}
                      src={urlFor(event.image.asset).url()}
                      alt={event.title}
                      className="rounded-lg w-full"
                    />
                  )}
                </div>

                <p>{event.description}</p>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
