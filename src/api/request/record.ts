export interface RecordRequest {
  type: number;
  name: string;
  role?: string;
  period?: string;
  description?: string;
  department?: string;
  from?: string;
  start?: string;
  end?: string;
  identifier?: string;
}
