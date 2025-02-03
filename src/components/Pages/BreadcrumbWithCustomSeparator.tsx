import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const BreadcrumbWithCustomSeparator = () => {
  return (
    <div className=" w-full max-w-screen-xl mt-[7%] ml-8">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center space-x-2 text-sm text-gray-700">
          {/* Home */}
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/home"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* Separator */}
          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          {/* Components */}
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/about"}>About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* Separator */}
          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          {/* Current Page */}
          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold text-blue-600">
              IBM System & Software Solution
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbWithCustomSeparator;
