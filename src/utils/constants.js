// import supabase from "../services/supabase";

// let PAGE_SIZE = 6;

// const pageSize = async () => {
//   const {
//     data: { pageSize },
//     error,
//   } = await supabase.from("settings").select("*").single();

//   if (error) {
//     console.error(error);
//     throw new Error("Settings could not be loaded");
//   }

//   return pageSize;
// };

// PAGE_SIZE = pageSize;

// export { PAGE_SIZE };

export const PAGE_SIZE = 6;
