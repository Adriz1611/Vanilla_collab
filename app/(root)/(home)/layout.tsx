'use client';

import { ReactNode, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  useEffect(() => {
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.body.appendChild(botpressScript);

    const configScript = document.createElement('script');
    configScript.src =
      'https://mediafiles.botpress.cloud/ea08b950-ed1d-4286-b342-190f7a99467a/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
