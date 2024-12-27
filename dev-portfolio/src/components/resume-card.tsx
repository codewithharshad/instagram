"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ShineBorder from "@/components/ui/shine-border";
 import InteractiveHoverButton from "@/components/ui/interactive-hover-button";


interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    > 
      <Card className="flex">
        <ShineBorder
      className="bg-gradient-to-r from-resume-start to-resume-end w-full overflow-hidden rounded-lg flex px-4"
      borderWidth={1.5}
      color={["#4E2A7F", "#8A2BE2", "#38126D"]}>
        <div className="flex-none">
          <Avatar className="size-32 m-auto bg-muted-background">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base text-white">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-lg">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
          
            </div>
            {subtitle && <div className="font-sans text-xs  text-white">{description}</div>}
          </CardHeader>
          <InteractiveHoverButton text={'Visit'} className={'rounded p-1 mt-2 bg-resume-button text-white font-normal text-xs sm:text-sm border-resume-border w-24'}/>
         </div>
      </ShineBorder>
      </Card>

    </Link>
  );
};
