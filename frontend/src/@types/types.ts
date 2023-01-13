export interface AppContextType {
    handleSideBar: () => void;
    sideBar: Boolean;
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    tasks: Task[];
    
    createTask: string;
    setCreateTask: React.Dispatch<React.SetStateAction<string>>;
    showModal: Boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectCategory: string;
    setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
    dueDate: string;
    setDueDate: React.Dispatch<React.SetStateAction<string>>;
    alert: {
      error: string;
      status: boolean;
    };
    setAlert: React.Dispatch<
      React.SetStateAction<{
        error: string;
        status: boolean;
      }>
    >;
    handleCreateTask: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => Promise<void>;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    handleDelete:(id: string) => Promise<void>;
    changeDateFormat: (myDate: Date) => string;
  }
  export interface Task {
    _id: string;
    name: string;
    date: Date;
    completed: boolean;
    category:string;
  }