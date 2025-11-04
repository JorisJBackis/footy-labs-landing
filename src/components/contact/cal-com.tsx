"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface CalComProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    role: string;
    organisation: string;
  };
  isFormValid: boolean;
}

export function CalCom({ formData, isFormValid }: CalComProps) {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "auto"
      });
      setCalLoaded(true);
    })();
  }, []);

  // Build the notes field with all form data
  const buildNotes = () => {
    return `${formData.firstName} ${formData.lastName} (${formData.email}) - ${formData.role} at ${formData.organisation}, ${formData.country}`;
  };

  const calConfig = {
    layout: "month_view",
    prefill: {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      notes: buildNotes()
    }
  };
  console.log(calConfig.prefill.notes)
  // console.log(formData.email);
  return (
      <Button
          data-cal-link={`sviatoslav-st9cwi/30min?email=${calConfig.prefill.email}&name=${calConfig.prefill.name}&notes=${calConfig.prefill.notes}`}
          data-cal-config={JSON.stringify(calConfig)}
          disabled={!isFormValid || !calLoaded}
          className="flex-1 h-12"
      >
        Schedule a Meeting
      </Button>
  );
}``