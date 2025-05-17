import React from 'react';

import { Button } from '@/components/ui/button';
import { GridWrapper } from '@/components/grid-wrapper';

const Page = () => {
  return (
    <div>
      <GridWrapper columns="default">
        Starter template
        <Button variant="default">Default</Button>
      </GridWrapper>
    </div>
  );
};

export default Page;
