"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/input";
import { useForm, useWatch } from "react-hook-form";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect } from "react";
import { departmentschema, DepartmentSchema } from "@/lib/FormValidationSchima";
import Select from "react-select";
import { CreateDepartment, UpdateDepartment } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DepartmentForm = ({
  type,
  data,
  relatedData,
  relatedData2,
  SetOpen,
}: {
  type: "Create" | "Update";
  data?: any;
  relatedData: any;
  relatedData2: any;
  SetOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    setValue,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DepartmentSchema>({
    resolver: zodResolver(departmentschema),
  });

  // Watch selected courses to keep react-select UI synchronized with form state
  const selectedCourseIds = useWatch({
    control,
    name: "courses",
    defaultValue: [],
  });

  const [state, FormAction] = useActionState(
    type === "Create" ? CreateDepartment : UpdateDepartment,
    {
      successMessage: false,
      errorMessage: false,
    }
  );

  const SubmiteData = handleSubmit((formData) => {
    startTransition(() => {
      FormAction(formData);
      console.log("Form Data Submitted:", formData);
    });
  });

  const Route = useRouter();

  useEffect(() => {
    if (state?.successMessage) {
      toast.success(
        `Department ${type === "Create" ? "Created" : "Updated"} Successfully`
      );
      SetOpen(false);
      Route.refresh();
    }
  }, [state, Route, SetOpen, type]);

  const teachers = relatedData?.teachers || [];
  const courses = relatedData2?.courses || [];

  // Populate form fields on Update mode
  useEffect(() => {
    if (type === "Update" && data) {
      reset({
        DepartmentName: data.name,
        Supervisor: data.supervisor?.id || "",
        id: data.id,
        courses: data.courses?.map((course: any) => course.id),
      });
    }
  }, [data, type, reset]);

  return (
    <form
      className="flex flex-col p-2 lg:p-4 justify-center items-center gap-2"
      onSubmit={SubmiteData}
    >
      <h1 className="text-2xl font-semibold self-start">
        {type === "Create" ? "Create A New" : "Update"} Department
      </h1>

      <h2 className="text-gray-500 self-start text-sm font-semibold">
        Department info
      </h2>

      {/* Hidden input to supply department ID for updates */}
      {type === "Update" && <input type="hidden" {...register("id")} />}

      <div className="grid lg:grid-cols-2 justify-between gap-2 w-full grid-cols-1">
        <Input
          type="text"
          name="DepartmentName"
          id="DepartmentName"
          register={register}
          errors={errors.DepartmentName}
          label="Department Name"
          Placeholder="Enter Department Name"
        />

        <div className="flex flex-col w-full">
          <label htmlFor="department" className="text-xs font-medium mb-1">
            Select Supervisor
          </label>
          <select
            id="department"
            {...register("Supervisor")}
            className="h-10 border-2 border-amber-100 w-full p-2 rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Select supervisor
            </option>
            {teachers.map((d: any) => (
              <option key={d.id} value={d.id}>
                {d.firstName} {d.lastName}
              </option>
            ))}
          </select>

          {errors.Supervisor && (
            <span className="text-sm text-red-500">
              {errors.Supervisor.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full col-span-full">
          <label className="text-xs font-medium mb-1">Courses</label>
          <Select
            isMulti
            styles={{
              control: (base) => ({
                ...base,
                border: "2px solid #fef3c7",
              }),
            }}
            options={courses.map((t: any) => ({
              value: t.id,
              label: t.name,
            }))}
            value={courses
              .filter((c: any) => selectedCourseIds?.includes(c.id))
              .map((c: any) => ({ value: c.id, label: c.name }))}
            onChange={(selected) => {
              setValue(
                "courses",
                selected ? selected.map((s: any) => s.value) : []
              );
            }}
          />
          {errors.courses && (
            <span className="text-sm text-red-500">
              {errors.courses.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-md w-full text-white mt-4 transition-all"
      >
        {type === "Create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default DepartmentForm;