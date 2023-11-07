import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
      pageSize,
    } = {},
  } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();

  function handleUpdate(e, field) {
    let { value } = e.target;
    // console.log({ [field]: value });
    if (!value) return;
    updateSettings({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== Number(minBookingLength) &&
            handleUpdate(e, "minBookingLength")
          }
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== Number(maxBookingLength) &&
            handleUpdate(e, "maxBookingLength")
          }
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== Number(maxGuestsPerBooking) &&
            handleUpdate(e, "maxGuestsPerBooking")
          }
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== Number(breakfastPrice) &&
            handleUpdate(e, "breakfastPrice")
          }
        />
      </FormRow>
      <FormRow label="Page Size">
        <Input
          type="number"
          id="page-size"
          defaultValue={pageSize}
          disabled={isUpdating}
          onBlur={(e) => Number(e.target.value) !== Number(pageSize) && handleUpdate(e, "pageSize")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
