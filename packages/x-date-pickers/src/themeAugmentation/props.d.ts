import {
  DateCalendarProps,
  ExportedSlideTransitionProps,
  PickersFadeTransitionGroupProps,
} from '../DateCalendar';
import { DayCalendarSkeletonProps } from '../DayCalendarSkeleton';
import { ClockNumberProps, TimeClockProps, ClockPointerProps, ClockProps } from '../TimeClock';
import { ExportedPickersMonthProps, MonthCalendarProps } from '../MonthCalendar';
import { PickersDayProps } from '../PickersDay';
import { ExportedPickersYearProps, YearCalendarProps } from '../YearCalendar';
import { DateFieldProps } from '../DateField';
import { LocalizationProviderProps } from '../LocalizationProvider';
import { PickersLayoutProps } from '../PickersLayout';
import { DayCalendarProps } from '../DateCalendar/DayCalendar';
import { ExportedPickersArrowSwitcherProps } from '../internals/components/PickersArrowSwitcher/PickersArrowSwitcher.types';
import { PickerPopperProps } from '../internals/components/PickersPopper';
import { PickersToolbarProps } from '../internals/components/PickersToolbar';
import { PickersToolbarButtonProps } from '../internals/components/PickersToolbarButton';
import { ExportedPickersToolbarTextProps } from '../internals/components/PickersToolbarText';
import { DateOrTimeView } from '../models';

import { DatePickerProps, DatePickerToolbarProps } from '../DatePicker';
import { DesktopDatePickerProps } from '../DesktopDatePicker';
import { MobileDatePickerProps } from '../MobileDatePicker';
import { StaticDatePickerProps } from '../StaticDatePicker';

import {
  DateTimePickerProps,
  DateTimePickerTabsProps,
  DateTimePickerToolbarProps,
} from '../DateTimePicker';
import { DesktopDateTimePickerProps } from '../DesktopDateTimePicker';
import { MobileDateTimePickerProps } from '../MobileDateTimePicker';
import { StaticDateTimePickerProps } from '../StaticDateTimePicker';
import { DateTimeFieldProps } from '../DateTimeField';

import { TimePickerProps, TimePickerToolbarProps } from '../TimePicker';
import { DesktopTimePickerProps } from '../DesktopTimePicker';
import { MobileTimePickerProps } from '../MobileTimePicker';
import { StaticTimePickerProps } from '../StaticTimePicker';
import { ExportedDigitalClockProps } from '../DigitalClock';
import { TimeFieldProps } from '../TimeField';
import {
  ExportedMultiSectionDigitalClockSectionProps,
  MultiSectionDigitalClockProps,
} from '../MultiSectionDigitalClock';
import { ExportedPickersCalendarHeaderProps } from '../PickersCalendarHeader';
import {
  PickersTextFieldProps,
  PickersInputBaseProps,
  PickersOutlinedInputProps,
  PickersInputProps,
  PickersFilledInputProps,
} from '../PickersTextField';
import { PickersSectionListProps } from '../PickersSectionList';

export interface PickersComponentsPropsList {
  MuiClock: ClockProps<unknown>;
  MuiClockNumber: ClockNumberProps;
  MuiClockPointer: ClockPointerProps;
  MuiDateCalendar: DateCalendarProps<unknown>;
  MuiDateField: DateFieldProps<unknown>;
  MuiDatePickerToolbar: DatePickerToolbarProps<unknown>;
  MuiDateTimeField: DateTimeFieldProps<unknown>;
  MuiDateTimePickerTabs: DateTimePickerTabsProps;
  MuiDateTimePickerToolbar: DateTimePickerToolbarProps<unknown>;
  MuiDayCalendar: DayCalendarProps<unknown>;
  MuiDayCalendarSkeleton: DayCalendarSkeletonProps;
  MuiDigitalClock: ExportedDigitalClockProps<unknown>;
  MuiLocalizationProvider: LocalizationProviderProps<unknown, unknown>;
  MuiMonthCalendar: MonthCalendarProps<unknown>;
  MuiMultiSectionDigitalClock: MultiSectionDigitalClockProps<unknown>;
  MuiMultiSectionDigitalClockSection: ExportedMultiSectionDigitalClockSectionProps;
  MuiPickersArrowSwitcher: ExportedPickersArrowSwitcherProps;
  MuiPickersCalendarHeader: ExportedPickersCalendarHeaderProps<unknown>;
  MuiPickersDay: PickersDayProps<unknown>;
  MuiPickersFadeTransitionGroup: PickersFadeTransitionGroupProps;
  MuiPickersMonth: ExportedPickersMonthProps;
  MuiPickersPopper: PickerPopperProps;
  MuiPickersSlideTransition: ExportedSlideTransitionProps;
  MuiPickersToolbar: PickersToolbarProps<unknown, DateOrTimeView>;
  MuiPickersToolbarButton: PickersToolbarButtonProps;
  MuiPickersToolbarText: ExportedPickersToolbarTextProps;
  MuiPickersLayout: PickersLayoutProps<unknown, unknown, DateOrTimeView>;
  MuiPickersYear: ExportedPickersYearProps;
  MuiTimeClock: TimeClockProps<unknown>;
  MuiTimeField: TimeFieldProps<unknown>;
  MuiTimePickerToolbar: TimePickerToolbarProps<unknown>;
  MuiYearCalendar: YearCalendarProps<unknown>;

  // Date Pickers
  MuiDatePicker: DatePickerProps<unknown>;
  MuiDesktopDatePicker: DesktopDatePickerProps<unknown>;
  MuiMobileDatePicker: MobileDatePickerProps<unknown>;
  MuiStaticDatePicker: StaticDatePickerProps<unknown>;

  // Time Pickers
  MuiTimePicker: TimePickerProps<unknown>;
  MuiDesktopTimePicker: DesktopTimePickerProps<unknown>;
  MuiMobileTimePicker: MobileTimePickerProps<unknown>;
  MuiStaticTimePicker: StaticTimePickerProps<unknown>;

  // Date Time Pickers
  MuiDateTimePicker: DateTimePickerProps<unknown>;
  MuiDesktopDateTimePicker: DesktopDateTimePickerProps<unknown>;
  MuiMobileDateTimePicker: MobileDateTimePickerProps<unknown>;
  MuiStaticDateTimePicker: StaticDateTimePickerProps<unknown>;

  // V7 Picker's TextField
  MuiPickersTextField: PickersTextFieldProps;
  MuiPickersInputBase: PickersInputBaseProps;
  MuiPickersInput: PickersInputProps;
  MuiPickersFilledInput: PickersFilledInputProps;
  MuiPickersOutlinedInput: PickersOutlinedInputProps;
  MuiPickersSectionList: PickersSectionListProps;
}

declare module '@mui/material/styles' {
  interface ComponentsPropsList extends PickersComponentsPropsList {}
}

// disable automatic export
export {};
