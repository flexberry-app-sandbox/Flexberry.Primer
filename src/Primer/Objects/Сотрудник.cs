﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Primer
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    //  *** Start programmer edit section *** (Сотрудник CustomAttributes)

    //  *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "ФИО as \'ФИО\'",
            "EMail as \'E mail\'",
            "Актуально as \'Актуально\'"})]
    [View("СотрудникL", new string[] {
            "ФИО as \'ФИО\'",
            "EMail as \'E mail\'",
            "Актуально as \'Актуально\'"})]
    public class Сотрудник : IIS.Primer.Справочник
    {
        
        private string fФИО;
        
        private string fEMail;
        
        //  *** Start programmer edit section *** (Сотрудник CustomMembers)

        //  *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// ФИО.
        /// </summary>
        //  *** Start programmer edit section *** (Сотрудник.ФИО CustomAttributes)

        //  *** End programmer edit section *** (Сотрудник.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                //  *** Start programmer edit section *** (Сотрудник.ФИО Get start)

                //  *** End programmer edit section *** (Сотрудник.ФИО Get start)
                string result = this.fФИО;
                //  *** Start programmer edit section *** (Сотрудник.ФИО Get end)

                //  *** End programmer edit section *** (Сотрудник.ФИО Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Сотрудник.ФИО Set start)

                //  *** End programmer edit section *** (Сотрудник.ФИО Set start)
                this.fФИО = value;
                //  *** Start programmer edit section *** (Сотрудник.ФИО Set end)

                //  *** End programmer edit section *** (Сотрудник.ФИО Set end)
            }
        }
        
        /// <summary>
        /// EMail.
        /// </summary>
        //  *** Start programmer edit section *** (Сотрудник.EMail CustomAttributes)

        //  *** End programmer edit section *** (Сотрудник.EMail CustomAttributes)
        [StrLen(255)]
        public virtual string EMail
        {
            get
            {
                //  *** Start programmer edit section *** (Сотрудник.EMail Get start)

                //  *** End programmer edit section *** (Сотрудник.EMail Get start)
                string result = this.fEMail;
                //  *** Start programmer edit section *** (Сотрудник.EMail Get end)

                //  *** End programmer edit section *** (Сотрудник.EMail Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Сотрудник.EMail Set start)

                //  *** End programmer edit section *** (Сотрудник.EMail Set start)
                this.fEMail = value;
                //  *** Start programmer edit section *** (Сотрудник.EMail Set end)

                //  *** End programmer edit section *** (Сотрудник.EMail Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.Primer.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.Primer.Сотрудник));
                }
            }
        }
    }
}
