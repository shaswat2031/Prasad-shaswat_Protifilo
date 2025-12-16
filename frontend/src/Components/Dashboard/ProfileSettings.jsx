import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

const ProfileSettings = () => {
    return (
        <div className="flex-1 min-h-screen bg-gray-50/50 p-8 md:p-12 md:ml-64 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-serif text-[#4A4A35] italic mb-3 tracking-wide">Profile Settings</h1>
                    <p className="text-gray-500 font-medium">Manage your public profile information and access your data</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                    {/* Profile Picture */}
                    <div className="mb-10">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">PROFILE PICTURE</label>
                        <div className="flex items-center gap-8">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <button className="px-8 py-3 bg-[#FDF6E9] hover:bg-[#FBEACE] text-[#6B5D4D] font-bold rounded-xl text-sm transition-all border border-[#FBEACE]/50 mb-3 tracking-wide shadow-sm hover:shadow">
                                    CHANGE AVATAR
                                </button>
                                <p className="text-xs text-gray-400 font-medium tracking-wide">JPG, PNG or GIF • Max 5MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Subscription Status */}
                    <div className="mb-10 bg-[#EDF3EF] border border-[#DEEBE3] rounded-2xl p-5 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-[#DEEBE3] rounded-xl flex items-center justify-center text-[#558B6E]">
                                <Calendar size={22} strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">SUBSCRIPTION VALID UNTIL</p>
                                <p className="text-[#2F4F3F] font-bold text-lg">January 13, 2026</p>
                            </div>
                        </div>
                        <span className="px-4 py-1.5 bg-white text-[#558B6E] text-xs font-bold rounded-full shadow-sm">Active</span>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Username (brand)</label>
                                <div className="relative group">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-serif italic text-lg z-10 transition-colors group-focus-within:text-[#D4AF37]">@</span>
                                    <input
                                        type="text"
                                        defaultValue="prasadshaswat"
                                        className="w-full pl-10 pr-6 py-4 bg-[#FDFBF6] border-2 border-[#F3EFE5] rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#FCD34D] focus:bg-white transition-all placeholder:text-gray-300 font-serif"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">FULL NAME</label>
                                <input
                                    type="text"
                                    defaultValue="Prasad Shaswat"
                                    className="w-full px-6 py-4 bg-[#FDFBF6] border-2 border-[#F3EFE5] rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#FCD34D] focus:bg-white transition-all placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">PROFESSION</label>
                            <input
                                type="text"
                                defaultValue="CSE"
                                className="w-full px-6 py-4 bg-[#FDFBF6] border-2 border-[#F3EFE5] rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#FCD34D] focus:bg-white transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Bio</label>
                                <button className="text-xs font-bold text-[#558B6E] flex items-center gap-1.5 hover:text-[#2F4F3F] transition-colors py-1 px-3 rounded-lg hover:bg-[#EDF3EF]">
                                    <Sparkles size={14} />
                                    GENERATE WITH AI
                                </button>
                            </div>
                            <textarea
                                rows="4"
                                className="w-full px-6 py-4 bg-[#FDFBF6] border-2 border-[#F3EFE5] rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#FCD34D] focus:bg-white transition-all resize-none placeholder:text-gray-300 leading-relaxed"
                                placeholder="Tell us about yourself..."
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
