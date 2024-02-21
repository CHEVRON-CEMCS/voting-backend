// This is where the root direcotry fo files
exports.dir=__dirname;

/**
 * ADMIN TYPES
 * SUPER: ULTIMATE ADMIN THAT CAN DO ANYTHING
 * ADMIN: Has admin priviledges and can create lower types of admin, cannot create another admin right
 * CONTENT: Can manage content (music and videos), upload, edit and delete. Cannot create any admin.
 * BOOKING: Can handle and manage bookings.
 *  
 * Only Super admin can delete all admins
 * Normal admins can delete both content and booking admins
 */


exports.adminTypes=["admin","content","booking"]