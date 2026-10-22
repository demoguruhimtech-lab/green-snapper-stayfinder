import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  createWhatsAppLink,
  ROOM_TYPES,
  roomNameById,
} from "@/lib/hotel";
import { isCheckoutAfterCheckin, isPastDate, todayISO } from "@/lib/booking";

const bookingFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name.")
      .max(80, "Name must be under 80 characters."),
    phone: z
      .string()
      .trim()
      .regex(/^[+0-9][0-9\s-]{6,14}$/, "Please enter a valid phone number."),
    checkIn: z.string().min(1, "Please select a check-in date."),
    checkOut: z.string().min(1, "Please select a check-out date."),
    adults: z.string().min(1),
    children: z.string().min(1),
    rooms: z.string().min(1),
    roomType: z.string().min(1),
    message: z.string().trim().max(500, "Message must be under 500 characters.").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.checkIn && isPastDate(data.checkIn)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["checkIn"],
        message: "Check-in cannot be in the past.",
      });
    }
    if (data.checkIn && data.checkOut && !isCheckoutAfterCheckin(data.checkIn, data.checkOut)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["checkOut"],
        message: "Check-out must be after check-in.",
      });
    }
  });

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const DEFAULT_VALUES: BookingFormValues = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  adults: "2",
  children: "0",
  rooms: "1",
  roomType: "any",
  message: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs font-medium text-destructive" role="alert">
      {message}
    </p>
  );
}

interface BookingFormProps {
  defaultRoom?: string | undefined;
  className?: string;
}

export function BookingForm({ defaultRoom, className }: BookingFormProps) {
  const [minDate, setMinDate] = useState("");
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  useEffect(() => {
    setMinDate(todayISO());
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      ...DEFAULT_VALUES,
      roomType: defaultRoom && roomNameById(defaultRoom) ? defaultRoom : "any",
    },
  });

  const onSubmit = (values: BookingFormValues) => {
    const link = createWhatsAppLink({
      name: values.name,
      checkIn: values.checkIn,
      checkOut: values.checkOut,
      adults: Number(values.adults),
      children: Number(values.children),
      rooms: Number(values.rooms),
      roomType: values.roomType === "any" ? undefined : roomNameById(values.roomType),
      message: values.message || undefined,
    });
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmittedLink(link);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="booking-name">Full name *</Label>
          <Input
            id="booking-name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-phone">Phone number *</Label>
          <Input
            id="booking-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 90000 00000"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-check-in">Check-in date *</Label>
          <Input
            id="booking-check-in"
            type="date"
            min={minDate}
            aria-invalid={!!errors.checkIn}
            {...register("checkIn")}
          />
          <FieldError message={errors.checkIn?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-check-out">Check-out date *</Label>
          <Input
            id="booking-check-out"
            type="date"
            min={minDate}
            aria-invalid={!!errors.checkOut}
            {...register("checkOut")}
          />
          <FieldError message={errors.checkOut?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-adults">Adults</Label>
          <Controller
            control={control}
            name="adults"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="booking-adults">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-children">Children</Label>
          <Controller
            control={control}
            name="children"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="booking-children">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-rooms">Rooms</Label>
          <Controller
            control={control}
            name="rooms"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="booking-rooms">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-room-type">Preferred room</Label>
          <Controller
            control={control}
            name="roomType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="booking-room-type">
                  <SelectValue placeholder="Select a room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">No preference — suggest options</SelectItem>
                  {ROOM_TYPES.map((room) => (
                    <SelectItem key={room.id} value={room.id}>
                      {room.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="booking-message">Special requests (optional)</Label>
          <Textarea
            id="booking-message"
            rows={3}
            placeholder="Anything the hotel should know about your stay"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          <MessageCircle className="size-4" aria-hidden="true" /> Send Enquiry on WhatsApp
        </Button>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Submitting opens WhatsApp with your enquiry prefilled. Sending an enquiry does not
          confirm a reservation — the hotel will confirm availability, current rates and booking
          terms directly with you.
        </p>
      </div>

      {submittedLink ? (
        <div
          role="status"
          className="mt-4 rounded-lg border border-border bg-secondary p-4 text-sm text-secondary-foreground"
        >
          <p className="font-semibold">Your enquiry is ready.</p>
          <p className="mt-1 leading-relaxed">
            WhatsApp should have opened in a new tab with your details prefilled. If it did not
            open,{" "}
            <a
              href={submittedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              open WhatsApp here
            </a>
            .
          </p>
        </div>
      ) : null}
    </form>
  );
}
