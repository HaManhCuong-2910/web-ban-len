export const updateSeoMeta = (
  title: string,
  description: string,
  keywords: string,
  image?: string
) => {
  useHead({
    title,
  });
  useSeoMeta({
    ogTitle: title,
    description: description,
    ogDescription: description,
    keywords,
    robots: "index, follow",
    ogImage: image,
  });
};

export const listMetaTagDefault = [
  {
    name: "viewport",
    content:
      "width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1, user-scalable=0",
  },
  {
    name: "format-detection",
    content: "telephone=no, date=no, address=no, email=no",
  },
];

export interface IChooseOption {
  label: string;
  value: string | number;
}

export const formatNumberMoney = (value: number | string) => {
  let valueNumber = value;
  if (typeof value !== "string") {
    valueNumber = Number(value);
  }
  const formater = new Intl.NumberFormat("vi-VN");
  return formater.format(valueNumber as number).split(",")[0];
};

export enum ETypeButton {
  primary = "primary",
  secondary = "secondary",
}

export enum ENativeTypeButton {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum TYPE_TRANSFORM_INPUT {
  UPPER_REMOVE_SPACE = 1,
  UPPER_CASE = 2,
  UPPER_CASE_AND_REMOVE_ACCENTS = 3,
  LOWER_CASE_AND_REMOVE_ACCENTS_SPACE = 4,
  BIEN_SO_XE_CHARACTERS = 5,
  UPPER_CASE_AND_REMOVE_ACCENTS_SPACE = 6,
  REMOVE_SPACE = 7,
}

export const onTransformValueType = (type: number, value: any) => {
  if (!value) return value;
  switch (type) {
    case TYPE_TRANSFORM_INPUT.UPPER_REMOVE_SPACE:
      return value.toUpperCase().split(" ").join("");
    case TYPE_TRANSFORM_INPUT.UPPER_CASE:
      return value.toUpperCase();
    case TYPE_TRANSFORM_INPUT.UPPER_CASE_AND_REMOVE_ACCENTS:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
    case TYPE_TRANSFORM_INPUT.UPPER_CASE_AND_REMOVE_ACCENTS_SPACE:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();
    case TYPE_TRANSFORM_INPUT.LOWER_CASE_AND_REMOVE_ACCENTS_SPACE:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toLowerCase();
    case TYPE_TRANSFORM_INPUT.BIEN_SO_XE_CHARACTERS:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase()
        .replace(/[^A-Z0-9\-\.\_]*$/g, "");
    case TYPE_TRANSFORM_INPUT.REMOVE_SPACE:
      return value.replace(/\s/g, "");

    default:
      return value;
  }
};
