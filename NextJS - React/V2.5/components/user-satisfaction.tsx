"use client";

import { UserCheck, Users, XCircle } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";

interface SatisfactionData {
    label: string;
    percentage: number;
    color: string;
    icon: React.ElementType;
}

const satisfactionLevels: SatisfactionData[] = [
    { label: "Muy Satisfecho", percentage: 75, color: "bg-green-500", icon: UserCheck },
    { label: "Satisfecho", percentage: 18, color: "bg-blue-500", icon: Users },
    { label: "Insatisfecho", percentage: 7, color: "bg-red-500", icon: XCircle },
];

export function UserSatisfaction() {
    return (
        <CardContent>
            <ResponsiveContainer width="100%" height={200}>
                <div className="space-y-4">
                    {satisfactionLevels.map(({ label, percentage, color, icon: Icon }) => (
                        <div key={label} className="flex items-center w-full">
                            <Icon className={`mr-2 h-4 w-4 ${color}`} />
                            <div className="flex flex-col flex-grow">
                                <p className="text-sm font-medium leading-none">{label}</p>
                                <div className="flex items-center w-full">
                                    <div className="h-2 w-full rounded-full bg-secondary relative">
                                        <div
                                            className={`h-2 rounded-full ${color} absolute left-0 top-0`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="ml-2 text-sm text-muted-foreground">{percentage}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ResponsiveContainer>
        </CardContent>
    );
}
