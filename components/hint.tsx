import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';


export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
};


export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset,

}: HintProps) => {
   return  (<TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent className="text-white bg-black
             border-black border-opacity-10 p-1 rounded-md opacity-75"

                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
            >
                <p className='font-semibold capitalized'>
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>);
};
