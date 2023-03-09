import { Button } from "primereact/button"
import React from "react"
import { BsSearch } from "react-icons/bs"
// import { useHistory } from "react-router-dom"
/** @className =  any className ex: padding/ margin /color*/
/** @title = Title of the button ex: Save*/
/** @disabled = Disable the button => true / false*/
/** @label = Button name ex: Save*/
/** @icon = Icon Name ex: pi pi-check */
/** @onClick = onClick Action Method */
/** @loading = if button disabled and loading */
/** @type = button type ex: submit, reset */

export const CommonButton = (
  {
    type = "submit",
    className,
    title,
    disabled,
    label,
    icon,
    onClick,
    loading,
  },
  ...rest
) => {
  return (
    <Button
      type={type}
      label={label}
      title={title}
      icon={icon}
      disabled={disabled}
      className={`p-button-sm ${className}`}
      onClick={onClick}
      loading={loading}
      {...rest}
    />
  )
}

export const SearchButton = () => {
  return (
    <div>
      <CommonButton
        type="submit"
        label="Search"
        icon={<BsSearch className="text-white text-lg mr-2 p-button-sm" />}
      />
    </div>
  )
}
