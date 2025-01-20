import React from "react";
import client from "../../sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { Lato } from "next/font/google";
import { urlFor } from "@/sanity/lib/images";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export default async function Events() {
  // Fetch the events data
  const events = await client.fetch(EVENTS_QUERY);

  return (
    <div
      className={`${lato.variable} font-sans h-screen w-screen justify-center items-center flex flex-col`}
    >
      <section id="events" className="justify-center items-center w-3/4 ">
        <h1 className="text-4xl">Events</h1>
        <ul className="border rounded-lg flex gap-8 ">
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

                <p className="text-2xl ">{event.description}</p>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
