import { TextField } from "@mui/material"
import { AutoComplete } from "primereact/autocomplete"
import { Calendar } from "primereact/calendar"
import { Checkbox } from "primereact/checkbox"
import { InputSwitch } from "primereact/inputswitch"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { Password } from "primereact/password"
import { PickList } from "primereact/picklist"
import { RadioButton } from "primereact/radiobutton"
import { useEffect } from "react"
import { MdOutlineFilePresent, MdOutlineGTranslate } from "react-icons/md"
import { toast } from "react-toastify"

export const InputField = ({
  id,
  type,
  name,
  label,
  labelFor,
  required,
  errors,
  defaultValue,
  disabled = false,
  register,
  width,
  height,
  value,
  optionLabel,
  autoFilteredValue,
  autoCompleteMethod,
  selectedAutoValue,
  setSelectedAutoValue,
  className,
  checked,
  onChange,
  translateHandler,
  setSwitchChecked,
  switchChecked,
  onBlur,
  imagePreview,
  setImagePreview,
  onSelect,
  onClick,
  inputGroup,
  inputGroupIcon,
  switchClassName,
  picklistSourceValue,
  picklistTargetValue,
  setPicklistSourceValue,
  setPicklistTargetValue,
  sourceHeader,
  targetHeader,
  fileUploadPadding,
  autoCompleteFieldName,
  maxFractionDigits,
  minFractionDigits,
  prefix,
  suffix,
  mode,
  min,
  filePreview,
  radioBtnmap,
  selectionMode,
  minDate,
  maxDate,
  maxlength,
  onClose,
  accept,
  ...rest
}) => {
  useEffect(() => {
    if (errors) {
      toast.error(errors, {
        onClose,
      })
    }
  }, [errors])

  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
    },
  }

  return (
    <>
      {type !== "image" && (
        <span className={type !== "numbers" && "p-float-label"}>
          {!inputGroup && type === "text" && (
            <>
              <InputText
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
                {...rest}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}
          {!inputGroup && type === "number" && (
            <>
              <InputText
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "p-invalid"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}

          {!inputGroup && type === "numbers" && (
            <TextField
              type="number"
              value={value}
              required={required}
              variant="outlined"
              onChange={(e) => {
                const value = Number(e.target.value)
                const fraction = new Intl.NumberFormat("en-IN", {
                  maximumFractionDigits: maxFractionDigits || 0,
                  minimumFractionDigits: minFractionDigits || 0,
                }).format(value)
                return onChange({
                  ...e,
                  value: Number(fraction),
                  target: {
                    ...e.target,
                    value: Number(fraction),
                  },
                })
              }}
              id={id}
              label={label}
              name={name}
              onBlur={onBlur}
              onClick={onClick}
              fullWidth
              defaultValue={0}
              inputMode={mode || "decimal"}
              autoComplete={"true"}
              InputProps={{ style: { height: 45, minWidth: 60 } }}
              InputLabelProps={{
                className: `rounded-md ${
                  required && !value && "border-red-500"
                } w-${width}`,
              }}
              size="small"
              sx={style}
              onKeyDown={(event) =>
                !maxFractionDigits &&
                event.key === "." &&
                event.preventDefault()
              }
              onPaste={(event) => {
                if (!maxFractionDigits) return
                let pasteData = event.clipboardData.getData("text")
                if (pasteData.includes(".")) {
                  event.preventDefault()
                }
              }}
              disabled={disabled}
              {...rest}
            />
          )}

          {!inputGroup && type === "password" && (
            <>
              <Password
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
                feedback={false}
                inputClassName={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}
          {type === "textarea" && (
            <>
              <InputTextarea
                autoResize
                rows="5"
                cols="30"
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
              />
              <label htmlFor={labelFor}>{label}</label>
            </>
          )}
          {type === "select" && (
            <>
              <AutoComplete
                dropdown
                suggestions={autoFilteredValue}
                completeMethod={autoCompleteMethod}
                field={autoCompleteFieldName || "label"}
                id={id}
                name={name}
                className={`rounded-md w-${width} ${
                  required &&
                  !value?.length &&
                  !value?.label?.length &&
                  "autoComplete-red"
                }`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                onBlur={onBlur}
                autoHighlight
                onSelect={onSelect}
                onClick={onClick}
                defaultValue={defaultValue}
                dropdownAutoFocus
                required={required} // not working
                size={10}
                forceSelection
              />
              <label htmlFor={labelFor}>{label}</label>
            </>
          )}
          {type === "date" && (
            <>
              <Calendar
                showIcon
                showButtonBar
                className={`rounded-md ${
                  required && !value && "border-red-500"
                } w-${width}`}
                required={required}
                value={value}
                onChange={onChange}
                id={id}
                name={name}
                disabled={disabled}
                onClick={onClick}
                onBlur={onBlur}
                onSelect={onSelect}
                monthNavigator
                yearNavigator
                yearRange="1900:2050"
                dateFormat="dd/mm/yy"
                selectionMode={selectionMode}
                maxDate={maxDate}
                minDate={minDate}
                showOnFocus
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}
          {type === "translate" && (
            <>
              <div className="p-inputgroup ">
                <div className="p-float-label">
                  <InputText
                    className={`rounded-md ${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                  <button
                    type=""
                    icon={<MdOutlineGTranslate />}
                    className="bg-gray-500 text-2xl"
                    onClick={translateHandler}
                  />
                </div>
              </div>
            </>
          )}

          {type === "switch" && (
            <div
              className={
                !switchClassName
                  ? `border border-gray-400 grid grid-cols-${
                      label ? 2 : 1
                    } p-3 rounded-md bg-white`
                  : switchClassName
              }
            >
              {label && <p className="text-gray-600  ">{label}</p>}
              <div
                className={label ? "justify-self-end" : "justify-self-center"}
              >
                <InputSwitch
                  checked={switchChecked || false}
                  onChange={setSwitchChecked}
                  id={id}
                  name={name}
                  value={value}
                />
              </div>
            </div>
          )}

          {type === "checkbox" && (
            <>
              <Checkbox
                inputId={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
              />
              <label htmlFor={labelFor} className={className}>
                {label}
              </label>
            </>
          )}
          {inputGroup && type === "text" && (
            <div className="col-12 md:col-4 rounded-md">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className={inputGroupIcon}></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    id={id}
                    name={name}
                    className={`rounded-md ${
                      required && !value?.length && "border-red-500"
                    } w-${width} `}
                    disabled={disabled}
                    value={value == null ? "" : value}
                    onChange={onChange}
                    required={required}
                    onBlur={onBlur}
                    onClick={onClick}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                </span>
              </div>
            </div>
          )}
          {inputGroup && type === "password" && (
            <div className="col-12 md:col-4">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className={inputGroupIcon}></i>
                </span>
                <span className="p-float-label">
                  <Password
                    id={id}
                    name={name}
                    className={`${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                    disabled={disabled}
                    value={value == null ? "" : value}
                    onChange={onChange}
                    required={required}
                    onBlur={onBlur}
                    onClick={onClick}
                    feedback={false}
                    inputClassName={` ${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                </span>
              </div>
            </div>
          )}
        </span>
      )}
      {type === "image" && (
        <>
          <div
            className={`flex flex-col w-full  border-2 border-dashed ${
              required && !imagePreview
                ? "border-red-500 hover:bg-gray-100 hover:border-gray-300"
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded `}
          >
            {imagePreview ? (
              <div className="imageBox flex flex-col items-center justify-center">
                <img
                  className="object-cover  w-32 h-32"
                  src={imagePreview}
                  alt=""
                />
                <button
                  type="button"
                  onClick={setImagePreview}
                  className="text-red-600 text-center text-sm deleteButton px-2 py-2"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ) : (
              <label className="imageBox p-2">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    {label}
                  </p>
                </div>
                <input
                  accept="image/*"
                  pattern="([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)"
                  name={name}
                  id={id}
                  type="file"
                  className="opacity-0"
                  onChange={onChange}
                  onBlur={onBlur}
                  required={required}
                />
              </label>
            )}
          </div>
        </>
      )}

      {type === "file" && (
        <>
          <div
            className={`flex flex-col w-full  border border-solid ${
              required && !filePreview
                ? "border-red-400 hover:bg-red-100 hover:border-red-300 "
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded-lg `}
          >
            <label className={`imageBox p-${fileUploadPadding || "2"} `}>
              <div className="flex items-center justify-center pt-7 gap-2">
                <MdOutlineFilePresent className="text-3xl  font-light " />
                <p className="p-1 text-md tracking-wider text-gray-600 group-hover:text-gray-600 bg-cyan-400 rounded-md">
                  Attach File
                </p>
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="opacity-0"
                onChange={onChange}
                onBlur={onBlur}
                multiple
                required={required}
                accept={accept}
              />
            </label>
          </div>
        </>
      )}
      {type === "file2" && (
        <>
          <div
            className={`flex flex-col w-full  border border-solid ${
              required && !filePreview
                ? "border-red-400 hover:bg-red-100 hover:border-red-300 "
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded-lg `}
          >
            <label className={`imageBox h-12 p-${fileUploadPadding || "2"} `}>
              <div className="flex items-center justify-center pt-1 gap-2">
                <MdOutlineFilePresent className="text-3xl  font-light " />
                <p className="p-1 text-md tracking-wider text-gray-600 group-hover:text-gray-600 bg-cyan-400 rounded-md">
                  Attach File
                </p>
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="opacity-0"
                onChange={onChange}
                onBlur={onBlur}
                multiple
                required={required}
                accept={accept}
              />
            </label>
          </div>
        </>
      )}
      {type === "pickList" && (
        <>
          <PickList
            source={picklistSourceValue}
            target={picklistTargetValue}
            sourceHeader={sourceHeader}
            targetHeader={targetHeader}
            itemTemplate={(item) => <div>{item.name}</div>}
            onChange={(e) => {
              !onChange ? setPicklistSourceValue(e.source) : onChange(e)
              !onChange ? setPicklistTargetValue(e.target) : onChange(e)
            }}
            sourceStyle={{ height: "200px" }}
            targetStyle={{ height: "200px" }}
            showTargetControls={false}
            showSourceControls={false}
            {...rest}
          ></PickList>
        </>
      )}
      {type === "radio" && (
        <>
          <div className="p-radiobutton">
            {radioBtnmap.map(({ label, value, checked, onChange }) => (
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId={id}
                  name={name}
                  value={value}
                  checked={checked}
                  onChange={onChange}
                  className="ml-2"
                />
                <label htmlFor={labelFor} className={`p-radiobutton-label`}>
                  {label}
                </label>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
