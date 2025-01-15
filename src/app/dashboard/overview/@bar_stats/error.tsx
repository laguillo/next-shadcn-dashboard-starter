'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function StatsError({ error }: { error: Error }) {
  return (
    <Card className='border-red-500'>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <Alert variant='destructive' className='border-none'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className='mt-2'>
              Failed to load statistics: {error.message}
            </AlertDescription>
          </Alert>
        </div>
      </CardHeader>
      <CardContent className='flex h-[316px] items-center justify-center p-6'>
        <div className='text-center'>
          <p className='mb-4 text-sm text-muted-foreground'>
            Unable to display statistics at this time
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant='outline'
            className='min-w-[120px]'
          >
            Try again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}