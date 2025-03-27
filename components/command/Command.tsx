"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calculator, Calendar, CreditCard, GripHorizontal, Settings, Smile, User } from "lucide-react"
import Draggable from "react-draggable"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function DraggableCommand() {
    const [open, setOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
    const router = useRouter()
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((prev) => !prev)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])


    const handleNavigate = (path: string) => {
        router.push(path)
        setOpen(false) // Close menu after navigation
    }
    if (!open) return null

    return (
        <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="body">
            <div
                ref={nodeRef}
                className={`${isDarkMode ? "dark" : ""} fixed z-50`}
                style={{ position: "absolute", top: "100px", left: "100px" }}
            >
                <Command className="rounded-lg border shadow-md md:min-w-[450px] bg-background text-foreground">
                    <div className="drag-handle flex items-center justify-between px-3 pt-2 cursor-move">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <GripHorizontal className="h-4 w-4" />
                            <span>Drag me</span>
                        </div>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="text-xs text-muted-foreground hover:text-foreground"
                        >
                            {isDarkMode ? "Light" : "Dark"}
                        </button>
                    </div>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem onSelect={() => handleNavigate("/dashboard")}>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem onSelect={() => handleNavigate("/profile")}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </CommandItem>
                            
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </Draggable>
    )
}
