import React from "react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, User } from "lucide-react";

interface CTACardProps {
    name: string;
    position: string;
    photo?: string;
    phoneNumbers: string[];
    emails: string[];
    holderColorFrom?: string; // пример: "from-green-500/10"
    holderColorTo?: string;   // пример: "to-teal-500/10"
}

const CTACard: React.FC<CTACardProps> = ({
    name,
    position,
    photo,
    phoneNumbers,
    emails,
    holderColorFrom = "from-green-500/10",
    holderColorTo = "to-teal-500/10",
}) => {
    return (
        <Card className="max-w-2xl mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col md:flex-row h-full relative z-10">
                {/* Фото или иконка */}
                <div
                    className={`w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${holderColorFrom} ${holderColorTo} p-4 md:p-0`}
                >
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="w-28 h-32 object-cover rounded-lg shadow-lg"
                        />
                    ) : (
                        <div className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 md:p-0">
                            <div className="w-28 h-32 rounded-lg shadow-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                <User className="w-10 h-10 text-purple-400" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Контент */}
                <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
                    <p className="text-white/60 mb-4">{position}</p>

                    <div className="space-y-2">
                        {phoneNumbers.map((phone, index) => (
                            <div key={index} className="flex items-center text-slate-300">
                                <Phone className="w-4 h-4 mr-2 text-green-400" />
                                <a
                                    href={`tel:${phone}`}
                                    className="hover:text-green-400 transition-colors"
                                >
                                    {phone}
                                </a>
                            </div>
                        ))}

                        {emails.map((email, index) => (
                            <div key={index} className="flex items-center text-slate-300">
                                <Mail className="w-4 h-4 mr-2 text-teal-400" />
                                <a
                                    href={`mailto:${email}`}
                                    className="hover:text-teal-400 transition-colors"
                                >
                                    {email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CTACard;
