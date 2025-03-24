"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs"


import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogHeader
} from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create organization"
                        side="right"
                        align="start"
                        sideOffset={18}
                    >
                        <div className="bg-white/25 h-full w-full rounded-md 
                            flex items-center justify-center 
                            opacity-60 hover:opacity-100 transition-opacity
                            cursor-pointer">
                            <Plus className="text-white" />
                        </div>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <DialogHeader>
                    <DialogTitle className="sr-only">
                        Create Organization
                    </DialogTitle>
                </DialogHeader>
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
};