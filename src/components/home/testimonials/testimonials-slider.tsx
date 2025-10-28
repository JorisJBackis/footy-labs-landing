import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "FC Barcelona",
    position: "Club",
    designation: "La Liga",
    testimonial: "The platform revolutionized our scouting process. We can now analyze players worldwide with incredible depth.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Manchester United",
    position: "Club",
    designation: "Premier League",
    testimonial: "Having all metrics in one dashboard helps us make data-driven decisions faster than ever.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Bayern Munich",
    position: "Club",
    designation: "Bundesliga",
    testimonial: "The analytics and visualization tools are top-notch. Our coaching staff loves the insights.",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Juventus",
    position: "Club",
    designation: "Serie A",
    testimonial: "Tracking player performance and potential has never been easier. A must-have for modern clubs.",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    position: "Club",
    designation: "Ligue 1",
    testimonial: "The dashboard allows our analysts to quickly spot talent and monitor team performance efficiently.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Chelsea FC",
    position: "Club",
    designation: "Premier League",
    testimonial: "From scouting to match preparation, the platform has become essential for our technical staff.",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];


const Testimonial05 = () => (
    <div className="flex justify-center items-center px-6">
      <div>
        <h2 className="text-5xl font-semibold text-center tracking-[-0.03em]">
          Trusted by Clubs
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-xl">
          See how clubs are achieving more with us
        </p>
        <div className="mt-8 sm:mt-14 w-full max-w-(--breakpoint-xl) mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background">
            {testimonials.map((testimonial) => (
                <div
                    key={testimonial.id}
                    className="flex flex-col outline-solid outline-1 outline-border px-6 py-8"
                >
                  <div className="flex items-center justify-center gap-2">
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                  </div>
                  <p className="my-6 text-[17px] text-center max-w-md">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <div className="mt-auto flex items-center justify-center gap-3">
                    <Avatar className="size-9">
                      <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);

export default Testimonial05;
