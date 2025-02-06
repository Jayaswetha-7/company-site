import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbWithCustomSeparatorProps {
  currentPage: string;
}

const BreadcrumbWithCustomSeparator: React.FC<
  BreadcrumbWithCustomSeparatorProps
> = ({ currentPage }) => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  // Base structure for breadcrumbs
  let breadcrumbPath = (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink>
          <Link to={"/"}>Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
    </>
  );

  // Check if the current page is under the service route
  if (path[0] === "services") {
    breadcrumbPath = (
      <>
        {breadcrumbPath}
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to={"/services"}>Service</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>

        {/* Check for specific service page like 'webdevelopment', 'networking', etc. */}
        {path[1] && (
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/services"}>{currentPage}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </>
    );
  } else if (path[0] === "about") {
    breadcrumbPath = (
      <>
        {breadcrumbPath}
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to={"/about"}>About</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
      </>
    );
  }

  // Current page
  return (
    <div className="w-full max-w-screen-xl mt-[7%] ml-8">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center space-x-2 text-sm text-black">
          {breadcrumbPath}
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
