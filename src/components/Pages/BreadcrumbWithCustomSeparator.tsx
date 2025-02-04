import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface BreadcrumbWithCustomSeparatorProps {
  currentPage: string;
}

const BreadcrumbWithCustomSeparator: React.FC<
  BreadcrumbWithCustomSeparatorProps
> = ({ currentPage }) => {
  return (
    <div className="w-full max-w-screen-xl mt-[7%] ml-8">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center space-x-2 text-sm text-black">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/about"}>About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold text-black">
              {currentPage}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbWithCustomSeparator;
