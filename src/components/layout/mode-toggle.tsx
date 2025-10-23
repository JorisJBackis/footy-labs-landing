'use client';

import * as React from 'react';
import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import {toast} from "sonner";

export function ModeToggleInstant() {
  const {theme, setTheme} = useTheme();
  return (
      <Button
          variant="ghost"
          onClick={() => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            toast.message("Dark Theme is Under development")
          }}
          className="size-8"
      >
        <Icons.halfMoon/>
      </Button>
  );
}