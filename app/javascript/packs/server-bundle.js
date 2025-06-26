import ReactOnRails from 'react-on-rails';

// Import all React components for server-side rendering
import { PostList } from "../Components/PostList";
import { PostForm } from "../Components/PostForm";

// Register all components for server-side rendering
ReactOnRails.register({
  PostList,
  PostForm,
});
