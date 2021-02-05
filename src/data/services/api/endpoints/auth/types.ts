export interface iLoginRequest {
  username: string;
  password: string;
}

export interface iStoreRole {
  store_id: string;
  roles: string;
}

export interface iWarehouseRole {
  store_id: string;
  warehouse_id: string;
  role: string;
}

export interface iLoginResponse {
  token: string;
  name: string;
  is_store_user: boolean;
  is_warehouse_user: boolean;
  list_of_store_roles: iStoreRole[];
  list_of_warehouse_roles: iWarehouseRole[];
}
