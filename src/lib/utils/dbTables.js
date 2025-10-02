import { PUBLIC_ATTENDANCE_TABLE } from '$env/static/public';
import { PUBLIC_VIEW_TABLE } from '$env/static/public'

export const ATTENDANCE_TABLE = PUBLIC_ATTENDANCE_TABLE || 'attendance';
export const VIEW_TABLE = PUBLIC_VIEW_TABLE || 'views'