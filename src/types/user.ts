/**
 * User-related type definitions
 */

/**
 * DTO for reading user profile
 */
export interface UserReadDTO {
  id: string;
  name: string | null;
  phone: string;
  address: string;
  created_at?: string;
  updated_at?: string;
}

/**
 * DTO for updating user profile
 */
export interface UserUpdateDTO {
  name: string | null;
  phone: string;
  address: string;
}