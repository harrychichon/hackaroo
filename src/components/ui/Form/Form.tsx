import styles from "./Form.module.scss";

type Section = {
  title: string;
  fields: React.ReactNode;
};

type FormProps = {
  header?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  sections: Section[];
  actions?: React.ReactNode;
};

const Form = ({ header, onSubmit, sections, actions }: Readonly<FormProps>) => {
  return (
    <form onSubmit={onSubmit} className={styles.Form}>
      {header && <div className={styles.header}>{header}</div>}

      {sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.sectionContent}>{section.fields}</div>
        </section>
      ))}

      {actions && <div className={styles.buttonContainer}>{actions}</div>}
    </form>
  );
};

export default Form;
