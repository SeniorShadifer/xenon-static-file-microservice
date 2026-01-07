interface PageTitleProperties {
  title?: string;
}

export default function PageTitle(props: PageTitleProperties) {
  document.title = `${props.title} | Xenon`;

  return <></>;
}
