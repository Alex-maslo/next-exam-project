import React from "react";

export default function RecipeLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}