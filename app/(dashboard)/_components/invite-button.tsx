"use client"

import { Plus } from "lucide-react";
import { OrganizationProfile,  } from "@clerk/nextjs";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


export const InviteButton = () => {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Members
                </Button>
            </DialogTrigger>
           <DialogContent  className= "bg-transparent border-none max-w-[880px]">
           <VisuallyHidden>
                    <DialogTitle>Invite Members</DialogTitle>
                </VisuallyHidden> 
                 <OrganizationProfile routing="hash"/>
           </DialogContent>
        </Dialog>
    );
 }